define({ "api": [
  {
    "type": "get",
    "url": "author[={OFFSET}-{TOTAL}]",
    "title": "Everything",
    "version": "0.1.1",
    "name": "author",
    "group": "Author",
    "description": "<p>Returns all the information stored about every author in the database</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "OFFSET",
            "defaultValue": "0",
            "description": "<p>Skips the specified number of authors, used in conjunction with TOTAL</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "TOTAL",
            "defaultValue": "10",
            "description": "<p>Number of authors to return, used in conjunction with OFFSET</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Accept",
            "description": "<p>&quot;text/html text/xml&quot; or &quot;text/html application/json&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Authors' id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Authors' name</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "citations",
            "description": "<p>Authors' number of citations</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "h-index",
            "description": "<p>Authors' h-index value</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>Authors' Google Scholar url</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "institutions",
            "description": "<p>Authors' institutions</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "publications",
            "description": "<p>Authors' publications</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "co-authors",
            "description": "<p>Authors' co-authors</p>"
          }
        ]
      }
    },
    "filename": "./doc.php",
    "groupTitle": "Author"
  },
  {
    "type": "get",
    "url": "author/{A_ID}",
    "title": "Author",
    "version": "0.1.1",
    "name": "author_id",
    "group": "Author",
    "description": "<p>Returns all the information stored about one specific author in the database</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "A_ID",
            "description": "<p>Author id</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Accept",
            "description": "<p>&quot;text/html text/xml&quot; or &quot;text/html application/json&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Author's id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Author's name</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "citations",
            "description": "<p>Author's number of citations</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "h-index",
            "description": "<p>Author's h-index value</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>Author's Google Scholar url</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "institutions",
            "description": "<p>Author's institutions</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "publications",
            "description": "<p>Author's publications</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "co-authors",
            "description": "<p>Author's co-authors</p>"
          }
        ]
      }
    },
    "filename": "./doc.php",
    "groupTitle": "Author"
  },
  {
    "type": "get",
    "url": "author/{A_ID}/citations",
    "title": "Citations",
    "version": "0.1.1",
    "name": "author_id_citations",
    "group": "Author",
    "description": "<p>Returns the citations of an Author</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "A_ID",
            "description": "<p>Author id</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Accept",
            "description": "<p>&quot;text/html text/xml&quot; or &quot;text/html application/json&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "citations",
            "description": "<p>Author's number of citations</p>"
          }
        ]
      }
    },
    "filename": "./doc.php",
    "groupTitle": "Author"
  },
  {
    "type": "get",
    "url": "author/{A_ID}/co_author",
    "title": "Co-authors",
    "version": "0.1.1",
    "name": "author_id_co_author",
    "group": "Author",
    "description": "<p>Returns all the co-authors of the author</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "A_ID",
            "description": "<p>Author id</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Accept",
            "description": "<p>&quot;text/html text/xml&quot; or &quot;text/html application/json&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "co_authors",
            "description": "<p>Author's co-authors</p>"
          }
        ]
      }
    },
    "filename": "./doc.php",
    "groupTitle": "Author"
  },
  {
    "type": "get",
    "url": "author/{A_ID}/co_author/{C_ID}",
    "title": "Co-author",
    "version": "0.1.1",
    "name": "author_id_co_author_id",
    "group": "Author",
    "description": "<p>Returns a specific co-author of the author</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "A_ID",
            "description": "<p>Author id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "C_ID",
            "description": "<p>co-author id</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Accept",
            "description": "<p>&quot;text/html text/xml&quot; or &quot;text/html application/json&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "co_author",
            "description": "<p>Author's co_author</p>"
          }
        ]
      }
    },
    "filename": "./doc.php",
    "groupTitle": "Author"
  },
  {
    "type": "get",
    "url": "author/{A_ID}/h-index",
    "title": "H-index",
    "version": "0.1.1",
    "name": "author_id_h_index",
    "group": "Author",
    "description": "<p>Returns the h-index of an Author</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "A_ID",
            "description": "<p>Author id</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Accept",
            "description": "<p>&quot;text/html text/xml&quot; or &quot;text/html application/json&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "h-index",
            "description": "<p>Author's h-index value</p>"
          }
        ]
      }
    },
    "filename": "./doc.php",
    "groupTitle": "Author"
  },
  {
    "type": "get",
    "url": "author/{A_ID}/institution",
    "title": "Institutions",
    "version": "0.1.1",
    "name": "author_id_institution",
    "group": "Author",
    "description": "<p>Returns all the institutions the author is affiliated with</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "A_ID",
            "description": "<p>Author id</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Accept",
            "description": "<p>&quot;text/html text/xml&quot; or &quot;text/html application/json&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "institutions",
            "description": "<p>Author's institutions</p>"
          }
        ]
      }
    },
    "filename": "./doc.php",
    "groupTitle": "Author"
  },
  {
    "type": "get",
    "url": "author/{A_ID}/institution/{I_ID}",
    "title": "Institution",
    "version": "0.1.1",
    "name": "author_id_institution_id",
    "group": "Author",
    "description": "<p>Returns a specific institution the author is affiliated with</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "A_ID",
            "description": "<p>Author id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "I_ID",
            "description": "<p>Institution id</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Accept",
            "description": "<p>&quot;text/html text/xml&quot; or &quot;text/html application/json&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "institution",
            "description": "<p>Author's institution</p>"
          }
        ]
      }
    },
    "filename": "./doc.php",
    "groupTitle": "Author"
  },
  {
    "type": "get",
    "url": "author/{A_ID}/link",
    "title": "Link",
    "version": "0.1.1",
    "name": "author_id_link",
    "group": "Author",
    "description": "<p>Returns the Google Scholar url of an Author</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "A_ID",
            "description": "<p>Author id</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Accept",
            "description": "<p>&quot;text/html text/xml&quot; or &quot;text/html application/json&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>Author's Google Scholar url</p>"
          }
        ]
      }
    },
    "filename": "./doc.php",
    "groupTitle": "Author"
  },
  {
    "type": "get",
    "url": "author/{A_ID}/name",
    "title": "Name",
    "version": "0.1.1",
    "name": "author_id_name",
    "group": "Author",
    "description": "<p>Returns the name of an Author</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "A_ID",
            "description": "<p>Author id</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Accept",
            "description": "<p>&quot;text/html text/xml&quot; or &quot;text/html application/json&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Author's name</p>"
          }
        ]
      }
    },
    "filename": "./doc.php",
    "groupTitle": "Author"
  },
  {
    "type": "get",
    "url": "author/{A_ID}/publication",
    "title": "Publications",
    "version": "0.1.1",
    "name": "author_id_publication",
    "group": "Author",
    "description": "<p>Returns all the publications of the author</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "A_ID",
            "description": "<p>Author id</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Accept",
            "description": "<p>&quot;text/html text/xml&quot; or &quot;text/html application/json&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "publications",
            "description": "<p>Author's publications</p>"
          }
        ]
      }
    },
    "filename": "./doc.php",
    "groupTitle": "Author"
  },
  {
    "type": "get",
    "url": "author/{A_ID}/publication/{P_ID}",
    "title": "Publication",
    "version": "0.1.1",
    "name": "author_id_publication_id",
    "group": "Author",
    "description": "<p>Returns a specific publication of the author</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "A_ID",
            "description": "<p>Author id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "P_ID",
            "description": "<p>Publication id</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Accept",
            "description": "<p>&quot;text/html text/xml&quot; or &quot;text/html application/json&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "publication",
            "description": "<p>Author's publication</p>"
          }
        ]
      }
    },
    "filename": "./doc.php",
    "groupTitle": "Author"
  },
  {
    "type": "get",
    "url": "institution[={OFFSET}-{TOTAL}]",
    "title": "Everything",
    "version": "0.1.1",
    "name": "institution",
    "group": "Institution",
    "description": "<p>Returns all the information stored about every institution in the database</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "OFFSET",
            "defaultValue": "0",
            "description": "<p>Skips the specified number of institutions, used in conjunction with TOTAL</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "TOTAL",
            "defaultValue": "10",
            "description": "<p>Number of institutions to return, used in conjunction with OFFSET</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Accept",
            "description": "<p>&quot;text/html text/xml&quot; or &quot;text/html application/json&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Institutions' id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Institutions' name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>Institutions' Google Scholar url</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "investigator",
            "description": "<p>Institutions' investigators</p>"
          }
        ]
      }
    },
    "filename": "./doc.php",
    "groupTitle": "Institution"
  },
  {
    "type": "get",
    "url": "institution/{I_ID}",
    "title": "Institution",
    "version": "0.1.1",
    "name": "institution_id",
    "group": "Institution",
    "description": "<p>Returns all the information stored about eone specific institution in the database</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "I_ID",
            "description": "<p>Institution id</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Accept",
            "description": "<p>&quot;text/html text/xml&quot; or &quot;text/html application/json&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Institution's id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Institution's name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>Institution's Google Scholar url</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "investigator",
            "description": "<p>Institution's investigators</p>"
          }
        ]
      }
    },
    "filename": "./doc.php",
    "groupTitle": "Institution"
  },
  {
    "type": "get",
    "url": "institution/{I_ID}/investigator",
    "title": "Investigators",
    "version": "0.1.1",
    "name": "institution_id_investigator",
    "group": "Institution",
    "description": "<p>Returns all the investigators affiliated with an Institution</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "I_ID",
            "description": "<p>Institution id</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Accept",
            "description": "<p>&quot;text/html text/xml&quot; or &quot;text/html application/json&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "investigators",
            "description": "<p>Institution's investigators</p>"
          }
        ]
      }
    },
    "filename": "./doc.php",
    "groupTitle": "Institution"
  },
  {
    "type": "get",
    "url": "institution/{I_ID}/investigator/{A_ID}",
    "title": "Investigator",
    "version": "0.1.1",
    "name": "institution_id_investigator_id",
    "group": "Institution",
    "description": "<p>Returns a specific investigator affiliated with an Institution</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "I_ID",
            "description": "<p>Institution id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "A_ID",
            "description": "<p>Author id</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Accept",
            "description": "<p>&quot;text/html text/xml&quot; or &quot;text/html application/json&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "investigator",
            "description": "<p>Institution's investigator</p>"
          }
        ]
      }
    },
    "filename": "./doc.php",
    "groupTitle": "Institution"
  },
  {
    "type": "get",
    "url": "institution/{I_ID}/link",
    "title": "Link",
    "version": "0.1.1",
    "name": "institution_id_link",
    "group": "Institution",
    "description": "<p>Returns the Google Scholar url of an Institution</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "I_ID",
            "description": "<p>Institution id</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Accept",
            "description": "<p>&quot;text/html text/xml&quot; or &quot;text/html application/json&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>Institution's Google Scholar url</p>"
          }
        ]
      }
    },
    "filename": "./doc.php",
    "groupTitle": "Institution"
  },
  {
    "type": "get",
    "url": "institution/{I_ID}/name",
    "title": "Name",
    "version": "0.1.1",
    "name": "institution_id_name",
    "group": "Institution",
    "description": "<p>Returns the name of an Institution</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "I_ID",
            "description": "<p>Institution id</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Accept",
            "description": "<p>&quot;text/html text/xml&quot; or &quot;text/html application/json&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Institution's name</p>"
          }
        ]
      }
    },
    "filename": "./doc.php",
    "groupTitle": "Institution"
  },
  {
    "type": "get",
    "url": "publication[={OFFSET}-{TOTAL}]",
    "title": "Everything",
    "version": "0.1.1",
    "name": "publication",
    "group": "Publication",
    "description": "<p>Returns all the information stored about every publication in the database</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "OFFSET",
            "defaultValue": "0",
            "description": "<p>Skips the specified number of publications, used in conjunction with TOTAL</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "TOTAL",
            "defaultValue": "10",
            "description": "<p>Number of publications to return, used in conjunction with OFFSET</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Accept",
            "description": "<p>&quot;text/html text/xml&quot; or &quot;text/html application/json&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Publications' id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Publications' title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "abstract",
            "description": "<p>Publications' abstract</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "citations",
            "description": "<p>Publications' number of citations</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "journal",
            "description": "<p>Publications' journal</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "year",
            "description": "<p>Publications' year</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "doi",
            "description": "<p>Publications' doi</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>Publications' Google Scholar url</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "authors",
            "description": "<p>Publications' authors</p>"
          }
        ]
      }
    },
    "filename": "./doc.php",
    "groupTitle": "Publication"
  },
  {
    "type": "get",
    "url": "publication/{P_ID}",
    "title": "Publication",
    "version": "0.1.1",
    "name": "publication_id",
    "group": "Publication",
    "description": "<p>Returns all the information stored about one specific publication in the database</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "P_ID",
            "description": "<p>Publication id</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Accept",
            "description": "<p>&quot;text/html text/xml&quot; or &quot;text/html application/json&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Publication's id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Publication's title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "abstract",
            "description": "<p>Publication's abstract</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "citations",
            "description": "<p>Publication's number of citations</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "journal",
            "description": "<p>Publication's journal</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "year",
            "description": "<p>Publication's year</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "doi",
            "description": "<p>Publication's doi</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>Publication's Google Scholar url</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "authors",
            "description": "<p>Publication's authors</p>"
          }
        ]
      }
    },
    "filename": "./doc.php",
    "groupTitle": "Publication"
  },
  {
    "type": "get",
    "url": "publication/{P_ID}/abstract",
    "title": "Abstract",
    "version": "0.1.1",
    "name": "publication_id_abstract",
    "group": "Publication",
    "description": "<p>Returns the abstract of a Publication</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "P_ID",
            "description": "<p>Publication id</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Accept",
            "description": "<p>&quot;text/html text/xml&quot; or &quot;text/html application/json&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "abstract",
            "description": "<p>Publication's abstract</p>"
          }
        ]
      }
    },
    "filename": "./doc.php",
    "groupTitle": "Publication"
  },
  {
    "type": "get",
    "url": "publication/{P_ID}/author",
    "title": "Authors",
    "version": "0.1.1",
    "name": "publication_id_author",
    "group": "Publication",
    "description": "<p>Returns all the authors aof a Publication</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "P_ID",
            "description": "<p>Publication id</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Accept",
            "description": "<p>&quot;text/html text/xml&quot; or &quot;text/html application/json&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "authors",
            "description": "<p>Publication's authors</p>"
          }
        ]
      }
    },
    "filename": "./doc.php",
    "groupTitle": "Publication"
  },
  {
    "type": "get",
    "url": "publication/{P_ID}/author/{A_ID}",
    "title": "Author",
    "version": "0.1.1",
    "name": "publication_id_author_id",
    "group": "Publication",
    "description": "<p>Returns a specific author of a Publication</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "P_ID",
            "description": "<p>Publication id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "A_ID",
            "description": "<p>Author id</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Accept",
            "description": "<p>&quot;text/html text/xml&quot; or &quot;text/html application/json&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "author",
            "description": "<p>Publication's author</p>"
          }
        ]
      }
    },
    "filename": "./doc.php",
    "groupTitle": "Publication"
  },
  {
    "type": "get",
    "url": "publication/{P_ID}/citations",
    "title": "Citations",
    "version": "0.1.1",
    "name": "publication_id_citations",
    "group": "Publication",
    "description": "<p>Returns the number of citations of a Publication</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "P_ID",
            "description": "<p>Publication id</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Accept",
            "description": "<p>&quot;text/html text/xml&quot; or &quot;text/html application/json&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "citations",
            "description": "<p>Publication's number of citations</p>"
          }
        ]
      }
    },
    "filename": "./doc.php",
    "groupTitle": "Publication"
  },
  {
    "type": "get",
    "url": "publication/{P_ID}/doi",
    "title": "Doi",
    "version": "0.1.1",
    "name": "publication_id_doi",
    "group": "Publication",
    "description": "<p>Returns the doi of a Publication</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "P_ID",
            "description": "<p>Publication id</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Accept",
            "description": "<p>&quot;text/html text/xml&quot; or &quot;text/html application/json&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "doi",
            "description": "<p>Publication's doi</p>"
          }
        ]
      }
    },
    "filename": "./doc.php",
    "groupTitle": "Publication"
  },
  {
    "type": "get",
    "url": "publication/{P_ID}/journal",
    "title": "Journal",
    "version": "0.1.1",
    "name": "publication_id_journal",
    "group": "Publication",
    "description": "<p>Returns the journal of a Publication</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "P_ID",
            "description": "<p>Publication id</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Accept",
            "description": "<p>&quot;text/html text/xml&quot; or &quot;text/html application/json&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "journal",
            "description": "<p>Publication's journal</p>"
          }
        ]
      }
    },
    "filename": "./doc.php",
    "groupTitle": "Publication"
  },
  {
    "type": "get",
    "url": "publication/{P_ID}/link",
    "title": "Link",
    "version": "0.1.1",
    "name": "publication_id_link",
    "group": "Publication",
    "description": "<p>Returns the Google Scholar url of a Publication</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "P_ID",
            "description": "<p>Publication id</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Accept",
            "description": "<p>&quot;text/html text/xml&quot; or &quot;text/html application/json&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>Publication's Google Scholar url</p>"
          }
        ]
      }
    },
    "filename": "./doc.php",
    "groupTitle": "Publication"
  },
  {
    "type": "get",
    "url": "publication/{P_ID}/title",
    "title": "Title",
    "version": "0.1.1",
    "name": "publication_id_title",
    "group": "Publication",
    "description": "<p>Returns the name of a Publication</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "P_ID",
            "description": "<p>Publication id</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Accept",
            "description": "<p>&quot;text/html text/xml&quot; or &quot;text/html application/json&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Publication's title</p>"
          }
        ]
      }
    },
    "filename": "./doc.php",
    "groupTitle": "Publication"
  },
  {
    "type": "get",
    "url": "publication/{P_ID}/year",
    "title": "Year",
    "version": "0.1.1",
    "name": "publication_id_year",
    "group": "Publication",
    "description": "<p>Returns linkthe year of a Publication</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "P_ID",
            "description": "<p>Publication id</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Accept",
            "description": "<p>&quot;text/html text/xml&quot; or &quot;text/html application/json&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "year",
            "description": "<p>Publication's year</p>"
          }
        ]
      }
    },
    "filename": "./doc.php",
    "groupTitle": "Publication"
  }
] });
