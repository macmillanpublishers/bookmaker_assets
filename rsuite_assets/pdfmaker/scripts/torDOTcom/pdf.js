function getAllElementsWithAttribute(tag, attribute, value)
{
  var matchingElements = [];
  var allSections = document.getElementsByTagName(tag);
  for (var i = 0, n = allSections.length; i < n; i++)
  {
    if (allSections[i].getAttribute(attribute) == value)
    {
      // Element exists with attribute. Add to array.
      matchingElements.push(allSections[i]);
    };
  };
  return matchingElements;
};

function moveIllustrationSource()
{
var illoSources = document.querySelectorAll("figure p[class*='Credit-LineCrd']");
var copyright = getAllElementsWithAttribute('section',"data-type",'copyright-page')[0];
for (var j = 0; illoSources.length > j; j++) {
  var figID = illoSources[j].parentNode.getAttribute('id');
  var figLink = illoSources[j].childNodes[0];
  figLink.href = '#' + figID;
  if (illoSources[j].parentNode.parentNode.getAttribute('class') != 'abouttheauthor') {
    copyright.appendChild(illoSources[j]);
  };
  };
};

function addRunningElements() {
  var allParas = document.getElementsByTagName('p');
  for (var q = 0; allParas.length > q; q++) {
    var bookTitle = BKMKRINSERTBKTITLE;
    var runHeadRight = document.createElement("div");
    runHeadRight.setAttribute("class", "runheadright");
    var textnode = document.createTextNode(bookTitle);
    runHeadRight.appendChild(textnode);
    var bookAuthor = BKMKRINSERTBKAUTHOR;
    var runHeadLeft = document.createElement("div");
    runHeadLeft.setAttribute("class", "runheadleft");
    var textnode = document.createTextNode(bookAuthor);
    runHeadLeft.appendChild(textnode);
    var runFoot = document.createElement("div");
    var runFootSpan = document.createElement("span");
    runFoot.setAttribute("class", "runfoot");
    runFoot.appendChild(runFootSpan);
    var thisParent = allParas[q];
    thisParent.parentNode.insertBefore(runHeadLeft, thisParent.nextSibling);
    thisParent.parentNode.insertBefore(runHeadRight, thisParent.nextSibling);
    thisParent.parentNode.insertBefore(runFoot, thisParent.nextSibling);
  };
}

function fullpageFigures() {
  var allIllos = document.getElementsByTagName('img');
  var fullpageFigs = [];
  for (var h = 0; allIllos.length > h; h++) {
    var illoType = allIllos[h].getAttribute('src');
    if (illoType.indexOf("fullpage") > -1)
    {
      fullpageFigs.push(allIllos[h]);
    };
  };
  for (var f = 0; fullpageFigs.length > f; f++) {
    var parentFig = fullpageFigs[f].parentNode;
    var runHeadLeft = document.createElement("div");
    var textnode = document.createTextNode(" ");
    runHeadLeft.setAttribute("class", "runheadleft");
    runHeadLeft.appendChild(textnode);
    var runHeadRight = document.createElement("div");
    var textnode = document.createTextNode(" ");
    runHeadRight.setAttribute("class", "runheadright");
    runHeadRight.appendChild(textnode);
    var runFoot = document.createElement("div");
    var textnode = document.createTextNode(" ");
    runFoot.setAttribute("class", "runfoot");
    runFoot.appendChild(textnode);
    parentFig.setAttribute("class", "Image-PlacementImg fullpage");
    parentFig.insertBefore(runHeadLeft,parentFig.firstChild);
    parentFig.insertBefore(runHeadRight,parentFig.firstChild);
    parentFig.insertBefore(runFoot,parentFig.firstChild);
  };
};

window.onload = function() {
  moveIllustrationSource();
  addRunningElements();
  fullpageFigures();
};

// exclude author photo
// test in prince: done: run with --javascript flag (need to enable in DR)
// remove first funtion if poss?
// implement custom script support in pdfmaker