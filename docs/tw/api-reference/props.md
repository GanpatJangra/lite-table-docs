# 屬性

## title

| 名稱  | 類型 | 默認選項 | 描述     |
| ----- | ---- | -------- | -------- |
| title | 字串 | ""       | 表格標題 |

## is-slot-mode

| 名稱         | 類型   | 默認選項 | 描述                                                |
| ------------ | ------ | -------- | --------------------------------------------------- |
| is-slot-mode | 布林值 | false    | 如果您想使用 v-slot（V-slot 模式），請設置為 TRUE。 |

## is-static-mode

| 名稱           | 類型   | 默認選項 | 描述                                                           |
| -------------- | ------ | -------- | -------------------------------------------------------------- |
| is-static-mode | 布林值 | false    | 如果您不需要使用 ajax 或 axios 來獲取任何數據，請設置為 TRUE。 |

## has-checkbox

| 名稱         | 類型   | 默認選項 | 描述             |
| ------------ | ------ | -------- | ---------------- |
| has-checkbox | 布林值 | false    | 在行上顯示複選框 |

## checked-return-type

| 名稱                | 類型 | 默認選項 | 描述                 |
| ------------------- | ---- | -------- | -------------------- |
| checked-return-type | 字串 | "key"    | 返回已選行數據的類型 |

## is-loading

| 名稱       | 類型   | 默認選項 | 描述                                       |
| ---------- | ------ | -------- | ------------------------------------------ |
| is-loading | 布林值 | false    | 顯示加載遮罩（在 is-static-mode 上不需要） |

## is-re-search

| 名稱         | 類型   | 默認選項 | 描述                                                          |
| ------------ | ------ | -------- | ------------------------------------------------------------- |
| is-re-search | 布林值 | false    | 如果重新加載數據，請設置為 true（在 is-static-mode 上不需要） |

## is-fixed-first-column

| 名稱                  | 類型   | 默認選項 | 描述               |
| --------------------- | ------ | -------- | ------------------ |
| is-fixed-first-column | 布林值 | false    | 在滾動時固定第一列 |

## max-height

| 名稱       | 類型 | 默認選項 | 描述           |
| ---------- | ---- | -------- | -------------- |
| max-height | 字串 | "auto"   | 表格的最大高度 |

## columns <Badge type="danger">必填</Badge>

| 名稱    | 類型 | 默認選項 | 描述     |
| ------- | ---- | -------- | -------- |
| columns | 數組 | null     | 表格的列 |

::: details 更多選項
與列相關的一些其他選項。

| 名稱          | 類型   | 默認選項 | 描述                                            |
| ------------- | ------ | -------- | ----------------------------------------------- |
| isKey         | 布林值 | false    | 如果字段是主鍵，請設置為 true                   |
| label         | 字串   | null     | 用於顯示的字段標籤（支持 HTML）                 |
| field         | 字串   | null     | 行字段鍵名                                      |
| width         | 字串   | null     | 字段的寬度大小                                  |
| sortable      | 布林值 | false    | 如果字段可排序，請設置為 true                   |
| display       | 函數   | null     | 您可以自定義在此處顯示的數據（HTML 標記或其他） |
| headerClasses | 數組   | null     | 數據標題的類數組                                |
| columnClasses | 數組   | null     | 數據列的類數組                                  |
| headerStyles  | 對象   | null     | 數據標題的內聯樣式對象                          |
| columnStyles  | 對象   | null     | 數據列的內聯樣式對象                            |

:::

## rows <Badge type="danger">必填</Badge>

| 名稱 | 類型 | 默認選項 | 描述 |
| ---- | ---- | -------- | ---- |
| rows | 數組 | null     | 記錄 |

## rowClasses

| 名稱       | 類型      | 默認選項 | 描述                 |
| ---------- | --------- | -------- | -------------------- |
| rowClasses | 數組/函數 | null     | `<tr/>` 標記的類數組 |

## total <Badge type="danger">必填</Badge>

| 名稱  | 類型 | 默認選項 | 描述   |
| ----- | ---- | -------- | ------ |
| total | 數字 | null     | 記錄數 |

## sortable <Badge type="danger">必填</Badge>

| 名稱  | 描述               | <Badge type="danger">必填</Badge> | 類型 |
| ----- | ------------------ | --------------------------------- | ---- |
| order | 排序字段和排序方式 | 是                                | 字串 |

::: details 更多選項
與排序相關的一些其他選項。

| 名稱  | 描述               | <Badge type="danger">必填</Badge> | 類型 |
| ----- | ------------------ | --------------------------------- | ---- |
| order | 排序字段和排序方式 | 是                                | 字串 |
| sort  | 數據庫的可排序值   | 是                                | 字串 |

:::

## messages

| 名稱     | 描述       | 必填 | 類型 |
| -------- | ---------- | ---- | ---- |
| messages | 本地化消息 | 否   | 對象 |

::: details 更多選項
與消息相關的一些其他選項。

| 名稱                | 描述       | 必填 | 類型   | 默認選項              |
| ------------------- | ---------- | ---- | ------ | --------------------- |
| pagingInfo          | 本地化消息 | 否   | 字符串 | "顯示 {0}-{1} 共 {2}" |
| pageSizeChangeLabel | 本地化消息 | 否   | 字符串 | "每頁行數："          |
| gotoPageLabel       | 本地化消息 | 否   | 字符串 | "轉到頁："            |
| noDataAvailable     | 本地化消息 | 否   | 字符串 | "無數據"              |

:::

## is-hide-paging

| 名稱           | 描述                 | 必填 | 類型   | 默認選項 |
| -------------- | -------------------- | ---- | ------ | -------- |
| is-hide-paging | 不在底部顯示分頁信息 | 否   | 布林值 | false    |

## page

| 名稱 | 描述                                         | 必填 | 類型 | 默認選項 |
| ---- | -------------------------------------------- | ---- | ---- | -------- |
| page | 如果您想自己控制頁數，請使用此選項更改頁數。 | 否   | 數字 | 1        |

## page-size

| 名稱      | 描述                                                     | 必填 | 類型 | 默認選項 |
| --------- | -------------------------------------------------------- | ---- | ---- | -------- |
| page-size | 默認情況下顯示一頁上的項目數。在大多數情況下不需要設置。 | 否   | 數字 | 10       |

## pageOptions

| 名稱        | 描述                   | 必填 | 類型 | 默認選項                                                                        |
| ----------- | ---------------------- | ---- | ---- | ------------------------------------------------------------------------------- |
| pageOptions | 頁面下拉菜單的選項列表 | 否   | 數組 | `[ { value: 10, text: 10 }, { value: 25, text: 25 }, { value: 50, text: 50 } ]` |

::: details 更多選項
與 pageOptions 相關的一些其他選項。

| 字段  | 必填 | 類型         |
| ----- | ---- | ------------ |
| value | 是   | 數字         |
| text  | 是   | 數字 \| 字串 |

:::

## grouping-key

| 名稱         | 描述                                         | 必填 | 類型   | 默認選項 |
| ------------ | -------------------------------------------- | ---- | ------ | -------- |
| grouping-key | 如果您想使用分組表格，請設置分組字段的名稱。 | 否   | 字符串 | null     |

## has-group-toggle

| 名稱             | 描述                                   | 必填 | 類型   | 默認選項 |
| ---------------- | -------------------------------------- | ---- | ------ | -------- |
| has-group-toggle | 如果您使用分組表格，顯示分組切換按鈕。 | 否   | 布林值 | false    |