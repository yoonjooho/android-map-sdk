require(["gitbook","jquery"],function(gitbook,$){function fixSummaryLinks(){var $links=$(".book-summary nav li a");var bookRoot=gitbook.state.bookRoot;if(!/\/$/.test(bookRoot)){bookRoot+="/"}$links.each(function(index,link){var $link=$(link),href=$link.attr("href");if(/^ref:\/\//.test(href)){$link.attr("href",bookRoot+href.replace(/^ref:\/\//,""))}})}function fixPageLinks(){var $links=$(".book-body a");$links.each(function(index,link){var $link=$(link),href=$link.attr("href");if(/^ref:\/\//.test(href)){$link.attr("href",href.replace(/^ref:\/\//,""))}})}gitbook.push(function(){fixSummaryLinks();fixPageLinks()});gitbook.events.on("page.change",function(){fixSummaryLinks();fixPageLinks()})});
