# zoteroMetadataUpdater

Update metadata (titles, authors, publications, etc.) of selected entries in Zotero

更新zotero中所选内容的元信息（如标题、作者、期刊等）。

How to use:

使用方法：

1. Run Zotero, and select the entries you'd like to update
2. Click "Tools" on the menu bar
3. Select Developer > Run JavaScript
4. Paste the code in [updater.js](https://github.com/gaoyu19920914/zoteroMetadataUpdater/blob/main/updater.js) to the left "Code" panel of the new window
5. Hit "Run(Ctrl+R)"


运行 Zotero，选中要更新的条目；点击菜单栏中的工具；选择开发者-运行JavaScript；粘贴 [updater.js](https://github.com/gaoyu19920914/zoteroMetadataUpdater/blob/main/updater.js) 里的源代码到左侧窗口；点击运行（Ctrl+R）

Reference:

参考：

https://www.zotero.org/support/dev/client_coding/javascript_api
https://forums.zotero.org/discussion/75796/how-to-retrieve-and-update-metadata-in-zotero

Credits to:

感谢原始代码提供者：

[cttsyauchina](https://forums.zotero.org/profile/1817658/cttsyauchina) for their source code

I only added a loop to adapt it to multiple entries.

我这里仅仅加了个循环，使之可以一次更新许多条目。

Note: This script is limited to "journalArticle" with DOI, and will return error if conditions are not met.

注意：此程序脚本仅适用于有 DOI 号的期刊文章，条件不满足时会意外停止，返回错误。
