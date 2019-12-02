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
SELECT LTRIM(RTRIM(i.ItemID)) AS ItemID,
	 LTRIM(RTRIM(i.InvtID)) AS InvtID,
	 LTRIM(RTRIM(i.Name)) AS Name,
	 i.Descr, 
     i.LongDescr, 
     i.Image, 
     LTRIM(RTRIM(i.Type)) AS Type,
	 REPLACE(i.User1, 'product.aspx?','') AS User1,
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
	 LTRIM(RTRIM(i.Name)) AS Name,
	 i.Descr, 
     i.LongDescr, 
     i.Image, LTRIM(RTRIM(i.Type)) AS Type,
	 REPLACE(i.User1, 'product.aspx?','') AS User1,
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