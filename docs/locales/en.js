export const en = {
  component_description:
    "A simple and lightweight data table component for Vue.js 3. Features sorting, paging, row check, dynamic data rendering, supported TypeScript, and more.",
  quick_start: "QuickStart",
  install: "Install",
  include: "Include",
  usage: "Usage",
  usage_description: "Vue 3 Table Lite is supported 3 rendering mode",
  default_mode: "Default mode",
  default_mode_description:
    "If you are always use API to get rows data. choose this mode.",
  slot_mode: "V-slot mode",
  slot_mode_description:
    "If you are use API to get rows data and need use vue components on rendering. choose this mode.",
  static_mode: "Static mode",
  static_mode_description:
    "If you are not use API to get rows data. choose this mode.",
  api_reference: "API Reference",
  props: "Props",
  description: "Description",
  type: "Type",
  name: "Name",
  required: "Required",
  default_opt: "Default",
  values: "Values",
  example: "Example",
  hint: "Hint",
  props_table_title_desc: "Table-title",
  props_is_slot_mode_desc: "If you want use v-slot (V-slot Mode), set TRUE.",
  props_is_static_mode_desc:
    "If you not need use ajax or axios to get any data. set TRUE.",
  props_has_checkbox_desc: "Show checkbox on rows",
  props_checked_return_type_desc: "Return checked row data's type",
  props_is_loading_desc: "Show loading mask (Not required on is-static-mode)",
  props_is_re_search_desc:
    "If reload data, be set true (Not required on is-static-mode)",
  props_is_fixed_first_column_desc: "Fixed first column on scrolling",
  props_max_height_desc: "Table's max height",
  props_columns_desc: "The table columns",
  props_columns_isKey_desc: "If field is primary key. set to true",
  props_columns_label_desc: "Field lable for display (HTML support)",
  props_columns_field_desc: "Row field keyname",
  props_columns_width_desc: "Field's width size",
  props_columns_sortable_desc: "If the field can sorting. set to true",
  props_columns_display_desc:
    "You can customize display data in there. (html tag or Etc.)",
  props_columns_headerClasses_desc: "Data header's classes array",
  props_columns_columnClasses_desc: "Data column's classes array",
  props_columns_headerStyles_desc: "Data header's in-line style object",
  props_columns_columnStyles_desc: "Data column's in-line style object",
  props_rows_desc: "Records",
  props_rowClasses_desc: "tag's classes",
  props_total_desc: "Records count",
  props_sortable_desc: "Order field and sort for Sortable",
  props_sortable_order_desc: "Field key",
  props_sortable_sort_desc: '"asc" or "desc"',
  props_messages_desc: "Locale's messages",
  props_messages_pagingInfo_desc: "Locale's messages",
  props_messages_pageSizeChangeLabel_desc: "Locale's messages",
  props_messages_gotoPageLabel_desc: "Locale's messages",
  props_messages_noDataAvailable_desc: "Locale's messages",
  props_is_hide_paging_desc: "Not Show paging information on bottom",
  props_page_desc:
    "If you want to control the page number yourself, use this to change the page number.",
  props_page_size_desc:
    "Default display the number of items on one page. In most cases no set required.",
  props_page_options_desc: "Option list for pages dropdown",
  props_grouping_key_desc:
    "If you want to use a grouping table, set the name of your grouping field.",
  props_has_group_toggle_desc:
    "Show group toggle if you're using a grouping table.",
  props_grouping_display_desc:
    "Customize grouping title display if you're using a grouping table.",
  props_start_collapsed_desc: "Grouping rows will be collapsed after initial",
  props_is_keep_collapsed_desc: "Keep collapsed status after refresh",

  events: "Events",
  events_do_search_desc:
    "Your search event. It will be automatically triggered after data sorting and paging.",
  events_do_search_hint:
    "It's required in default mode, and in static mode, it's not.",
  events_do_search_offset_desc: "Offset value for the database.",
  events_do_search_limit_desc: "limit value for the database.",
  events_do_search_order_desc: "Sortable value for the database.",
  events_do_search_sort_desc: "Sortable value for the database.",
  events_is_finished_desc:
    "Will be trigger this function after table rendering finished.",
  events_is_finished_elements_desc:
    "Pass by has `is-rows-el` class name's elements.",
  events_return_checked_rows_desc:
    "Will be call this function after table checkbox on checked.",
  events_return_checked_rows_rowsKey_desc:
    "Pass by checked row's key field name.",
  events_get_now_page_desc: "You can get now page no from this function.",
  events_get_now_page_pageNo_desc: "Pass by page no.",
  events_row_clicked_desc:
    "You can get row data from this function after row clicked.",
  events_row_clicked_rowData_desc: "Pass by row data.",
  events_row_toggled_desc:
    "You can get rows data and toggle state after toggled.",
  events_row_toggled_rows_desc: "Pass by grouping rows.",
  events_row_toggled_is_collapsed_desc: "Pass by collapse state.",

  slots: "Slots",
  slots_description:
    "This is option. But, If you enabled V-slot mode, You should be to write it.",
  slots_field_name: "Field's name",
  slots_field_name_desc: "Show Row data's scope",
  slots_field_name_usage1: "Custom everywhere",
  slots_field_name_usage2: "Same everywhere",

  simple_examples: "Simple examples",
  advance_examples: "Advance examples",
  customize_display_data: "Customize display data",
  filter: "Filter",
  asynchronous_filter: "Asynchronous filter",
  filter_in_table: "Columns filter",
  customize_style: "Customize style",
  customize_style_2: "Customize style2",
  customize_message: "Customize messages",
  customize_page_dropdown: "Customize page's dropdown",
  catch_row_clicked: "Catch row clicked",
  fixed_first_column: "Fixed first column(Horizontal scrolling)",
  fixed_header_and_first_column: "Fixed header and first column(scrolling)",
  show_controls: "Show controls",
  grouping_with_toggle: "Grouping(With toggle)",
  grouping: "Grouping",
};