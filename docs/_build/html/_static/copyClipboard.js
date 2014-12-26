var client = new ZeroClipboard( document.getElementById("copy-button") );

client.on( "ready", function( readyEvent )
{
  // alert( "ZeroClipboard SWF is ready!" );
  client.on( "aftercopy", function( event )
  {
    // `this` === `client`
    // `event.target` === the element that was clicked
    // event.target.style.display = "none";
    alert("다음과 같은 내용이 복사 되었습니다. : " + event.data["text/plain"] );
  } );
} );