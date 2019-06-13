$( "li#cliqueinfo" )
  .filter( ":odd" )
    .hide()
  .end()
  .filter( ":even" )
    .hover(function() {
      $('#LinkAjax')
        .toggleClass( "active" )
        .next()
          .stop( true, true )
          .slideToggle();
    });
    
$( "li#cliqueinfo2" )
  .filter( ":odd" )
    .hide()
   .end()
    .filter( ":even" )
      .hover(function() {
        $('#LinkLav')
          .toggleClass( "active" )
          .next()
            .stop( true, true )
            .slideToggle();
      });