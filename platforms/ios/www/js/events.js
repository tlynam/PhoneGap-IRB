(function () {
  var lines = [], printed = false, webruby, load_string_func;

  // Taken from http://stackoverflow.com/a/901144
  function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }

  function getQueryLevel() {
    var level = parseInt(getParameterByName('level')) || 2;
    level = Math.min(2, level);
    level = Math.max(0, level);
    return level;
  }

  window.Module = {};
  window.Module['print'] = function (x) {
    lines.push(x);
    printed = true;
  };

  $(function() {
    var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
      mode: "text/x-ruby",
      lineNumbers: true,
      styleActiveLine: true,
      indentUnit: 1,
      tabSize: 2,
      smartIndent: true,
      autofocus: true,
      theme: "solarized light"
    });

    $("#code_link").click(function() {
      window.location.replace("index.html")
    })

    $("#doc_link").click(function() {
      window.location.replace("docs.html")
    })

    $("#about_link").click(function() {
      window.location.replace("about.html")
    })

    $('#output').height(window.innerHeight - $('#output').position().top - 45)

    webruby = new WEBRUBY({print_level: getQueryLevel()});

    $("#clear-history").click(function() {
      $("#output").empty()
    })

    $("#clear-input").click(function() {
      editor.setValue('')
    })

    $("#submit-button").click(function() {
      lines = [];
      printed = false;

      webruby.run_source(editor.getValue());

      if (!printed) {
        window.Module['print']('<small><i>(no output)</i></small>');
      }

      var element = $("#output");
      if (!element) return; // perhaps during startup

      element.html(lines.join('<br>') + '<hr>' + element.html());

      if ($('#clear-check').is(':checked')) {
        // clears current mrb states
        webruby.close();
        webruby = new WEBRUBY({print_level: 2});
      }
    });

    window.onbeforeunload = function () {
      webruby.close();
    }
  });
}());
