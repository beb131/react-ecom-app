-- ItemCategories
SELECT LTRIM(RTRIM(i.ItemID)) AS ItemID,
	 LTRIM(RTRIM(i.Name)) AS Name,
	 LTRIM(RTRIM(ic.categoryID)) AS categoryID,
	 ic.CategoryLevel, 
     ic.SortIndex
FROM xCTItems i
WITH(nolock)
INNER JOIN xCTItemCategories ic
	ON i.ItemID = ic.ItemID
WHERE i.CatalogID = 'JW' 
	AND Active = 1
ORDER BY categoryID, CategoryLevel, SortIndex ASC;

-- Items
DECLARE 
    @columns NVARCHAR(MAX) = '', 
    @sql     NVARCHAR(MAX) = '',
    @null_cols NVARCHAR(MAX) = '',
    @catalogID NVARCHAR(10) = 'JW'

-- Assign array to @columns,
-- length of which is based on the number of 
-- distinct SortIndexes that exist in that catalog.
SELECT @columns+=QUOTENAME(CONCAT('Extension',SortIndex)) + ','
FROM (
    SELECT DISTINCT Ext.SortIndex
    FROM xCTExtensions Ext
JOIN xctItemExtensions ItExt
    ON Ext.ExtensionGroupID = ItExt.ExtensionGroupID
    WHERE Ext.SortIndex IS NOT NULL
    AND ItExt.CatalogID = @catalogID
) as x;

-- remove the last comma
SET @columns = LEFT(@columns, LEN(@columns) - 1);
SET @null_cols = REPLACE(@columns, ',', ', NULL AS ');

SET @sql ='
SELECT 
    LTRIM(RTRIM(I.Name)) AS ItemName,
    LTRIM(RTRIM(CAST(I.Descr AS VARCHAR(250)))) AS Description,
    LTRIM(RTRIM(CAST(I.LongDescr AS VARCHAR(250)))) AS ItemDetails,
    Image,
    Type,
    LTRIM(RTRIM(I.Keywords)) AS Keywords,
    LTRIM(RTRIM(CAST(I.User11 AS VARCHAR(250)))) AS MetaDescription,
    REPLACE(i.User1, ''product.aspx?'','''') AS ProductURL,
    LTRIM(RTRIM(I.ItemID)) AS ItemID,
    NULL AS ' + @null_cols + ',
    1 AS RN
FROM xCTItems I
WHERE I.CatalogID = ''' + @catalogID + '''
AND I.Type = ''P''
AND I.Active = 1

UNION ALL

SELECT *, ROW_NUMBER() 
    -- Sort Result by ItemID
    OVER( 
        PARTITION BY ItemID
        ORDER BY ItemID
    ) AS RN 
    FROM (
    SELECT 
        LTRIM(RTRIM(I.Name)) AS ItemName,
        LTRIM(RTRIM(CAST(I.Descr AS VARCHAR(250)))) AS Description,
        LTRIM(RTRIM(CAST(I.LongDescr AS VARCHAR(250)))) AS ItemDetails,
        Image,
        Type,
        LTRIM(RTRIM(I.Keywords)) AS Keywords,
        LTRIM(RTRIM(CAST(I.User11 AS VARCHAR(250)))) AS MetaDescription,
        REPLACE(i.User1, ''product.aspx?'','''') AS ProductURL,
        LTRIM(RTRIM(ItExt.ItemID)) AS ItemID,
        Ext.ExtensionCode,
        -- Selects column Extension1(2, 3, etc.) for each unique SortIndex
        CONCAT(''Extension'', Ext.SortIndex) AS Extensions
    FROM xCTExtensions Ext
    JOIN xctItemExtensions ItExt
        ON Ext.ExtensionGroupID = ItExt.ExtensionGroupID
    JOIN xCTItems as I
        ON I.ItemID = ItExt.ItemID
    WHERE ItExt.CatalogID = ''' + @catalogID + '''
    AND I.Active = 1
) AS result

-- Create Columns named Extension1(2, 3, etc.) and populate with ExtensionCodes in order of their SortIndex
PIVOT (MIN(result.ExtensionCode) FOR Extensions IN (' + @columns + ')) AS pvt;'

-- Execute above SQL
EXECUTE sp_executesql @sql;

-- InvtIDs
-- Items
SELECT LTRIM(RTRIM(i.ItemID)) AS ItemID,
	 LTRIM(RTRIM(i.InvtID)) AS InvtID,
	 xigp.USD_ListPrice, 
     xigp.USD_Price, 
     isl.stkItem, 
     isl.qtyAvail
FROM  xCTItems i
WITH(nolock)
INNER JOIN xItemGlobalPricing xigp
	ON i.InvtID = xigp.InvtID
INNER JOIN xct_vwItemStockLevel isl
	ON i.ItemID = isl.ItemID
WHERE i.CatalogID = 'JW'
	AND Active = 1
	AND i.type = 'P'
	AND i.Descr IS NOT NULL
UNION ALL
SELECT LTRIM(RTRIM(i.ItemID)) AS ItemID,
	 LTRIM(RTRIM(ii.InvtID)) AS InvtID,
	 xigp.USD_ListPrice,
     xigp.USD_Price, 
     isl.stkItem, 
     isl.qtyAvail
FROM  xCTItems i
WITH(nolock)
FULL JOIN xCTItemInvtIDs ii
	ON i.ItemID = ii.itemID
INNER JOIN xItemGlobalPricing xigp
	ON ii.InvtID = xigp.InvtID
INNER JOIN xct_vwItemStockLevel isl
	ON ii.InvtID = isl.InvtID
WHERE i.CatalogID = 'JW' 
	AND Active = 1 
	AND i.type = 'PG' 
	AND i.Descr IS NOT NULL
ORDER BY ItemID ASC;

-- ItemExtensions
SELECT LTRIM(RTRIM(iext.ItemID)) AS ItemID,
	 LTRIM(RTRIM(iext.ExtensionGroupID)) AS ExtensionGroupID,
	 LTRIM(RTRIM(ext.ExtensionID)) AS ExtensionID,
	 ext.ExtensionCode, 
     ext.Name, 
     ext.Descr, 
     iext.sortIndex AS ExtensionOrder,
	 ext.SortIndex
	AS OptionOrder
FROM xCTItemExtensions iext
INNER JOIN xCTExtensions ext
	ON iext.ExtensionGroupID = ext.ExtensionGroupID
INNER JOIN xCTItems i
	ON iext.ItemID = i.ItemID
WHERE iext.CatalogID = 'JW'
	AND i.Active = 1
	AND i.Descr IS NOT NULL
ORDER BY iext.ItemID, ext.ExtensionGroupID, iext.sortIndex, ext.SortIndex ASC;

-- Categories
SELECT
	LTRIM(RTRIM(CategoryID)) AS CategoryID,
	LTRIM(RTRIM(CategoryName)) AS CategoryName,
	Descr,
	Image,
	CategoryLevel,
	REPLACE(REPLACE(User1, 'category.aspx?',''),'productlist.aspx?','') AS SubDir,
	LTRIM(RTRIM(ParentCategoryID)) AS ParentCategoryID,
	sortIndex
FROM xCTCategory
WITH(nolock)
WHERE CatalogID = 'JW'
AND ActiveFlag = 1
ORDER BY sortIndex, CategoryLevel, CategoryID  ASC