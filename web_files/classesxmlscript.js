$(document).ready(function() {			getRows();
		});

		function getRows() {
		document.body.style.backgroundColor = "#241773";
			var xmlhttp = new XMLHttpRequest();
			xmlhttp.open("get", "http://zoras.dssmss.com/rcs_classes.xml", true);
			xmlhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
					showResult(this);
				}
			};
			xmlhttp.send(null);
		}

		function showResult(xmlhttp) {
			var xmlDoc = xmlhttp.responseXML.documentElement;
			removeWhitespace(xmlDoc);
			var outputResult = document.getElementById("BodyRows");
			var rowData = xmlDoc.getElementsByTagName("Data");

			addTableRowsFromXmlDoc(rowData,outputResult);
		}

		function addTableRowsFromXmlDoc(xmlNodes,tableNode) {
			var theTable = tableNode.parentNode;
			var newRow, newCell, i;
			console.log ("Number of nodes: " + xmlNodes.length);
			for (i=0; i<xmlNodes.length; i++) {
				newRow = tableNode.insertRow(i);
				newRow.className = (i%2) ? "OddRow" : "EvenRow";
				for (j=0; j<xmlNodes[i].childNodes.length; j++) {
					newCell = newRow.insertCell(newRow.cells.length);
					if (xmlNodes[i].childNodes[j].firstChild) {
						newCell.innerHTML = xmlNodes[i].childNodes[j].firstChild.nodeValue;
					} else {
						newCell.innerHTML = "-";
					}
					console.log("cell: " + newCell);
				}
				}
				theTable.appendChild(tableNode);
		}

		function removeWhitespace(xml) {
			var loopIndex;
			for (loopIndex = 0; loopIndex < xml.childNodes.length; loopIndex++)
			{
				var currentNode = xml.childNodes[loopIndex];
				if (currentNode.nodeType == 1)
				{
					removeWhitespace(currentNode);
				}
				if (!(/\S/.test(currentNode.nodeValue)) && (currentNode.nodeType == 3))
				{
					xml.removeChild(xml.childNodes[loopIndex--]);
				}
			}
		}
