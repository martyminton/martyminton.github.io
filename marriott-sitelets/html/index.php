
<?php

 // listing all html files in current directory
 $d = dir(".");

 while (false !== ($entry = $d->read()))
 {
  if( strpos($entry, '.html') !== false)
  {
   echo "<p><a href='{$entry}'>{$entry}</a></p>";
  }
 }
 $d->close();

?>