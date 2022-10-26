var items = Zotero.getActiveZoteroPane().getSelectedItems();
var titles = [];
for (let item of items){
	let identifier = {
		itemType: "journalArticle",
		DOI: item.getField('DOI')
	};
	var translate = new Zotero.Translate.Search();
	translate.setIdentifier(identifier);
	let translators = await translate.getTranslators();
	translate.setTranslator(translators);
	let newItems = await translate.translate();
	let newItem = newItems[0];
	function update(field){
		if (newItem.getField(field)){
			item.setField(field,newItem.getField(field))
		}
	}
	item.setCreators(newItem.getCreators());
	// 可根据下述网址增减需要更新的Field.
	// https://www.zotero.org/support/dev/client_coding/javascript_api/search_fields

	let fields=["title","publicationTitle","journalAbbreviation","volume","issue","date","pages","issue","ISSN","url","abstractNote"]

	for (let field of fields){
		update(field);
	}

	newItem.deleted = true;
	item.saveTx();
	await newItem.saveTx();
	titles.push(item.getField("title")); 
}
return(titles)
