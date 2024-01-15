export interface IItemDto {
  fcom?: number;
  whs?: number;
  sku?: string | undefined;
  active?: boolean | undefined;
  type?: number | undefined;
  category?: number | undefined;
  plc?: string | undefined;
  vint?: number | undefined;
  desc?: string | undefined;
  photo?: string | undefined;
  ven?: string | undefined;
  corg?: string | undefined;
  vart?: string | undefined;
  qoh?: number | undefined;
  soq?: number | undefined;
  boq?: number | undefined;
  poq?: number | undefined;
  min?: number | undefined;
  max?: number | undefined;
  eoq?: number | undefined;
  mid?: number | undefined;
  mxd?: number | undefined;
  maxDisc?: number | undefined;
  lcost?: number | undefined;
  vcost?: number | undefined;
  acost?: number | undefined;
  wcost?: number | undefined;
  domCost?: number | undefined;
  domCur?: string | undefined;
  frgnCost?: number | undefined;
  frgnCur?: string | undefined;
  ppub?: boolean | undefined;
  taxable?: boolean | undefined;
  scomm?: boolean | undefined;
  bord?: boolean | undefined;
  scommPerc?: number | undefined;
  page?: string | undefined;
  uom1?: number | undefined;
  uom2?: number | undefined;
  uom3?: number | undefined;
  sqty?: number | undefined;
  pqty?: number | undefined;
  usize?: number | undefined;
  alc?: number | undefined;
  poCode?: string | undefined;
  poBy?: string | undefined;
  color?: string | undefined;
  cweight?: number | undefined;
  uweight?: number | undefined;
  created?: Date | undefined;
  lactDate?: Date | undefined;
  lactBy?: string | undefined;
  lactFrom?: string | undefined;
  lstSoNo?: string | undefined;
  lstSoDate?: Date | undefined;
  lstSoQty?: string | undefined;
  lstInvNo?: string | undefined;
  lstInvDate?: Date | undefined;
  lstInvQty?: string | undefined;
  lstPoNo?: string | undefined;
  lstPoDate?: Date | undefined;
  lstPoQty?: string | undefined;
  lstInbNo?: string | undefined;
  lstInbDate?: Date | undefined;
  lstInbQty?: string | undefined;
  bin1?: string | undefined;
  bin2?: string | undefined;
  memo?: string | undefined;
  isStockItem?: boolean | undefined;
  allowDiscounts?: boolean | undefined;
  priceAdjustment?: number | undefined;
  cqoh?: number | undefined;
  csoq?: number | undefined;
  cboq?: number | undefined;
  cpoq?: number | undefined;
  cmin?: number | undefined;
  cmax?: number | undefined;
  ceoq?: number | undefined;
  uqoh?: number | undefined;
  usoq?: number | undefined;
  uboq?: number | undefined;
  upoq?: number | undefined;
  umin?: number | undefined;
  umax?: number | undefined;
  ueoq?: number | undefined;
  userK1?: string | undefined;
  userK2?: string | undefined;
  discountIsPercent?: boolean | undefined;
  allocated?: boolean | undefined;
  vintageLinkToSku?: string | undefined;
  extWebDesc?: string | undefined;
  blrPpNo?: string | undefined;
  region?: string | undefined;
  grapeDescription?: string | undefined;
  producer?: string | undefined;
  billBackPerc?: number | undefined;
  pdfcolaPathname?: string | undefined;
  upc?: string | undefined;
  hideInventory?: boolean | undefined;
  fda?: string | undefined;
  casesPerPallet?: number | undefined;
  fowcost?: number | undefined;
  excellarcost?: number | undefined;
  c1?: number | undefined;
  c2?: number | undefined;
  c3?: number | undefined;
  c6?: number | undefined;
  c7?: number | undefined;
  fowprice?: number | undefined;
  whlsprice?: number | undefined;
  utahprice?: number | undefined;
  p1?: number | undefined;
  p2?: number | undefined;
  p6?: number | undefined;
  p7?: number | undefined;
  isAlo?: boolean | undefined;
  cvolumeLiters?: number | undefined;
  cvolumeGallons?: number | undefined;
  wh3?: number | undefined;
  cwh3?: number | undefined;
  uwh3?: number | undefined;
  wh4?: number | undefined;
  cwh4?: number | undefined;
  uwh4?: number | undefined;
  wh5?: number | undefined;
  cwh5?: number | undefined;
  uwh5?: number | undefined;
  wh6?: number | undefined;
  cwh6?: number | undefined;
  uwh6?: number | undefined;
  wh7?: number | undefined;
  cwh7?: number | undefined;
  uwh7?: number | undefined;
  fechaDeLanzamiento?: Date | undefined;
  nextVintage?: number | undefined;
  desc2?: string | undefined;
  qohold1?: number | undefined;
  qohold2?: number | undefined;
  qohold3?: number | undefined;
  qohold4?: number | undefined;
  qohold5?: number | undefined;
  qohold6?: number | undefined;
  qohold7?: number | undefined;
  complianceNo?: string | undefined;
  pdflettersPathname?: string | undefined;
  label1Pathname?: string | undefined;
  label2Pathname?: string | undefined;
  nyslaCode?: string | undefined;
  btlCost1?: number | undefined;
  btlCost2?: number | undefined;
  btlCost3?: number | undefined;
  btlCost4?: number | undefined;
  btlCost5?: number | undefined;
  btlCost6?: number | undefined;
  btlCost7?: number | undefined;
  btlCost8?: number | undefined;
  btlCost9?: number | undefined;
  btlPrice1?: number | undefined;
  btlPrice2?: number | undefined;
  btlPrice3?: number | undefined;
  btlPrice4?: number | undefined;
  btlPrice5?: number | undefined;
  btlPrice6?: number | undefined;
  btlPrice7?: number | undefined;
  btlPrice8?: number | undefined;
  btlPrice9?: number | undefined;
  belongsToCompany?: number | undefined;
  nysPricePostCode?: string | undefined;
  isLiquor?: boolean | undefined;
  status?: string | undefined;
  msrpBprice?: number | undefined;
  swpCase?: number | undefined;
  waitingListYn?: boolean | undefined;
  smallProductionWinesYn?: boolean | undefined;
  talrm?: number | undefined;
  calrm?: number | undefined;
  ualrm?: number | undefined;
  vceoq?: number | undefined;
  isAlarmOn?: boolean | undefined;
  trademarkExpDate?: Date | undefined;
  trademarkExpDateCymd?: string | undefined;
  matchWhs?: boolean | undefined;
  weMaintainInventory?: boolean | undefined;
  releaseDate?: Date | undefined;
  chkP2?: boolean | undefined;
  chkP5?: boolean | undefined;
  caseDimensions?: string | undefined;
  avlToSellWh2?: number | undefined;
  avlToSellWh3?: number | undefined;
  bavlToSellWh2?: number | undefined;
  bavlToSellWh3?: number | undefined;
  chkC2?: boolean | undefined;
  accountingPortfolioName?: number | undefined;
  w0?: number | undefined;
  w1?: number | undefined;
  w2?: number | undefined;
  w3?: number | undefined;
  w4?: number | undefined;
  w5?: number | undefined;
  w6?: number | undefined;
  w7?: number | undefined;
  wineryName?: string | undefined;
  whs7?: number | undefined;
  cwhs7?: number | undefined;
  uwhs7?: number | undefined;
  cwhs7as?: number | undefined;
  uwhs7as?: number | undefined;
  w8?: number | undefined;
  whs8?: number | undefined;
  cwhs8?: number | undefined;
  uwhs8?: number | undefined;
  cwhs8as?: number | undefined;
  uwhs8as?: number | undefined;
  annualProductionCases?: number | undefined;
  familyDk?: string | undefined;
  excludeFromCoap?: boolean | undefined;
  tariffedProduct?: boolean | undefined;
  mt46Code?: string | undefined;
  brandName?: string | undefined;
  categoryName?: string | undefined;
  productTypeName?: string | undefined;
  corgName?: string | undefined;
  regionName?: string | undefined;
  vendorName?: string | undefined;
  packingUomName?: string | undefined;
  stockingUomName?: string | undefined;
  sizeUomName?: string | undefined;
  nysBerName?: string | undefined;
  pricePostCodeName?: string | undefined;
  itemOwnerName?: string | undefined;
  accountingName?: string | undefined;
  packing?: number;
  stocking?: number;
  sizing?: number;
}