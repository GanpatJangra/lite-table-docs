export const tw = {
  component_description:
    "這是一個專為 Vue.js 3 開發的輕量級的表格組件，擁有排序、換頁、勾選、動態資料渲染等功能，並且支援 TypeScript。",
  quick_start: "啟動與安裝",
  install: "安裝",
  include: "載入",
  usage: "如何使用",
  usage_description: "在vue3-table-lite中，提供了三種不同的渲染模式。",
  default_mode: "預設模式",
  default_mode_description:
    "如果在操作表格時你總是透過API去取得數據，那麼你可以選擇該模式渲染。",
  slot_mode: "插槽模式",
  slot_mode_description:
    "如果在操作表格時你總是透過API去取得數據且你可能會使用其他組件放在表格當中，那麼你可以選擇該模式渲染。",
  static_mode: "靜態模式",
  static_mode_description:
    "如果你不需要每次操作都透過API去取得數據（又或是只有在初始化時取得），那麼你可以選擇該模式渲染。",
  api_reference: "API參照",
  props: "屬性",
  description: "說明",
  type: "類型",
  required: "必須",
  default: "預設",
  values: "值",
  example: "範例",
  hint: "提示",
  props_table_title_desc: "表格抬頭",
  props_is_slot_mode_desc: "是否為插槽模式",
  props_is_static_mode_desc: "是否為靜態模式",
  props_has_checkbox_desc: "每行開頭顯示勾選元件",
  props_checked_return_type_desc:
    "返回有勾選的值的類型。可返回 key 或是整筆資料",
  props_is_loading_desc: "顯示讀取遮罩（在靜態模式中可無視）",
  props_is_re_search_desc: "是否為再度查詢（在靜態模式中可無視）",
  props_is_fixed_first_column_desc: "是否於水平滑動時鎖住第一個欄位",
  props_max_height_desc: "表格高度",
  props_columns_desc: "表格欄位",
  props_columns_isKey_desc: "欄位是否為Key值",
  props_columns_label_desc: "欄位顯示於畫面的名稱（支援HTML標籤）",
  props_columns_field_desc: "欄位在資料中代表的名稱",
  props_columns_width_desc: "欄位在表格中佔有的畫面寬度",
  props_columns_sortable_desc: "欄位是否可以排序",
  props_columns_display_desc:
    "當你需要客製化顯示內容或二次處理時請定義該方法並返回HTML或字串等",
  props_columns_headerClasses_desc: "表頭(<th>)的Class（陣列格式）",
  props_columns_columnClasses_desc: "欄位(<td>)的Class（陣列格式）",
  props_columns_headerStyles_desc: "表頭的Style屬性",
  props_columns_columnStyles_desc: "欄位的Style屬性",
  props_rows_desc: "資料",
  props_rowClasses_desc: "<tr> 標籤的Class（陣列格式）",
  props_total_desc: "資料筆數",
  props_sortable_desc: "排序設定",
  props_sortable_order_desc: "欄位名稱（field）",
  props_sortable_sort_desc: '"asc" 或 "desc"',
  props_messages_desc: "在地化訊息",
  props_messages_pagingInfo_desc: "總筆數與現在顯示筆數文字",
  props_messages_pageSizeChangeLabel_desc: "每頁顯示筆數文字",
  props_messages_gotoPageLabel_desc: "換頁下拉選單文字",
  props_messages_noDataAvailable_desc: "無資料訊息",
  props_is_hide_paging_desc: "隱藏換頁功能",
  props_page_desc:
    "現在頁數（正常狀況下不需要同步與設定，除非你想透過其他方法控制換頁）",
  props_page_size_desc:
    '每頁顯示筆數下拉選單 <span class="text-red-500">大部分狀況下不需要設定</span>',
  props_page_options_desc: "下拉選單中的選項",
  props_grouping_key_desc: "當你想使用分類顯示表格時，設定你的分類顯示的關鍵字",
  props_has_group_toggle_desc: "在分類顯示表格中是否顯示可隱藏分類開關",
  props_grouping_display_desc: "在分類顯示表格中客製化分類標題",
  props_start_collapsed_desc: "在一開始就把分類表全部折疊起來",
  props_is_keep_collapsed_desc: "在畫面更新後保持折疊狀態",
  props_is_vertical_highlight_desc: "在鼠标碰触的直行显示高亮状态",

  events: "事件",
  events_do_search_desc:
    '查詢事件<span class="text-red-500">該事件會在換頁或是重新排序時自動觸發。</span>',
  events_do_search_hint: "在一般模式下，一定要記得設定，而在靜態模式下則非必須",
  events_do_search_offset_desc: "你要丟給後端用的Offset值",
  events_do_search_limit_desc: "你要丟給後端用的Limit值",
  events_do_search_order_desc: "你要丟給後端用的排序的Key",
  events_do_search_sort_desc: "你要丟給後端用的排序方式",
  events_is_finished_desc: "在重新渲染完成後將會觸發該事件",
  events_is_finished_elements_desc: "含有「is-rows-el」Class名稱的元素陣列",
  events_return_checked_rows_desc: "你能透過該事件取得目前被勾選的行資料",
  events_return_checked_rows_rowsKey_desc: "勾選中的Key值",
  events_get_now_page_desc: "你能夠透過該事件取得目前的頁數",
  events_get_now_page_pageNo_desc: "目前頁數",
  events_row_clicked_desc: "你能夠透過該事件取得目前被點擊的行資料",
  events_row_clicked_rowData_desc: "行資料",
  events_row_toggled_desc:
    "你能夠透過該事件取得目前被折疊或開啟的行資料與折疊狀態",
  events_row_toggled_rows_desc: "群組中的行資料",
  events_row_toggled_is_collapsed_desc: "是否折疊",

  slots: "插槽",
  slots_description:
    "這是一個選項功能，如果你將使用插槽模式渲染內容，那麼你應該使用下方方式定義模版。",
  slots_field_name: "欄位名稱",
  slots_field_name_desc: "要顯示在該區塊的資料",
  slots_field_name_usage1: "用法1 (對於每個欄位進行不同渲染)",
  slots_field_name_usage2: "用法2 (所有欄位進行相同渲染)",

  simple_examples: "簡易範例",
  advance_examples: "進階範例",
  customize_display_data: "客製化顯示內容",
  filter: "篩選內容（同步）",
  asynchronous_filter: "篩選內容（非同步）",
  filter_in_table: "篩選欄位資料",
  customize_style: "客製化外觀",
  customize_style_2: "客製化外觀2",
  customize_message: "客製化顯示文字",
  customize_page_dropdown: "客製化每頁顯示筆數",
  catch_row_clicked: "取得點擊行的資料",
  fixed_first_column: "水平滑動時鎖定第一個欄位",
  fixed_header_and_first_column: "滑動時鎖定表頭與第一個欄位",
  show_controls: "客製化功能鈕",
  grouping_with_toggle: "分類顯示（有隱藏開關）",
  grouping: "分類顯示",
};
