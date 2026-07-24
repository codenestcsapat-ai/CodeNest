Options -Indexes
<IfModule mod_headers.c>
  <FilesMatch "\.html$">
    Header set X-Robots-Tag "noindex, nofollow, noarchive"
  </FilesMatch>
</IfModule>
