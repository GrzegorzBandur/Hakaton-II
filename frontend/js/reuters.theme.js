(function ($) {

AjaxSolr.theme.prototype.result = function (doc, snippet) {
  var output = '<div><h2>' + doc.id + '</h2>';
  output += '<a href="'+ doc.url +'">Link do strony</a></p>';
  output += '<p>' + snippet + '</p></div>'; 
  return output;
};

AjaxSolr.theme.prototype.snippet = function (doc) {
  var output = '';
  if (doc.text.length > 100) {
     output += doc.text[0] + ' ' + doc.text[0].substring(0, 100);
    output += '<span style="display:none;">' + doc.text.substring(100);
    output += '</span> <a href="#" class="more">more</a>'; 
  }
  else {
    
    output += '<b>Wersja: </b>' + doc._version_ + ' ' + '<p id="links_" class="links"></p>';
	output += '<b>Licencja: </b>' + doc.license  + '<p id="links_" class="links"></p>';
	output += '<b>Tekst: </b>' + doc.text[1].substring(0, 100);
	output += '<span style="display:none;">' + doc.text[1].substring(100);
    output += '</span> <a href="#" class="more">więcej...</a>'; 
  }
  return output;
};

AjaxSolr.theme.prototype.tag = function (value, weight, handler) {
  return $('<a href="#" class="tagcloud_item"/>').text(value).addClass('tagcloud_size_' + weight).click(handler);
};

AjaxSolr.theme.prototype.facet_link = function (value, handler) {
  return $('<a href="#"/>').text(value).click(handler);
};

AjaxSolr.theme.prototype.no_items_found = function () {
  return 'no items found in current selection';
};

})(jQuery);
