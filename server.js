// Dependencies
// =============================================================================
const browserSync = require("browser-sync").create();
const compression = require("compression");

browserSync.init({
  files: ["./en/**/*.*", "./ja/**/*.*"],
  ghostMode: {
    clicks: false,
    forms: false,
    scroll: false
  },
  open: false,
  notify: false,
  cors: true,
  reloadDebounce: 1000,
  reloadOnRestart: true,
  server: {
    baseDir: ["./"],
    middleware: [compression()],
    routes: {
      "/HOME.md": "./HOME.md"
    }
  },
  serveStatic: ["./"],
  snippetOptions: {
    rule: {
      match: /<\/body>/i,
      fn: function(snippet, match) {
        // Fix CSS injection for alternate stylesheets
        const styleSwitchFix = `
                    <script>
                        (function() {
                            if (window.MutationObserver) {
                                window.browsersyncObserver = new MutationObserver(function(mutationsList) {
                                    mutationsList.forEach(function(mutation) {
                                        Array.apply(null, mutation.addedNodes).forEach(function(node) {
                                            var isLink       = node.tagName === 'LINK';
                                            var isStylesheet = isLink && (node.getAttribute('rel') || '').indexOf('stylesheet') !== -1;

                                            if (isStylesheet) {
                                                node.disabled = !node.disabled;
                                                node.disabled = !node.disabled;
                                            }
                                        });
                                    });
                                });

                                browsersyncObserver.observe(document.documentElement, {
                                    childList: true,
                                    subtree: true
                                });
                            }
                        })();
                    </script>
                `;

        return snippet + styleSwitchFix + match;
      }
    }
  }
});
