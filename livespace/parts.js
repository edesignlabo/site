// initialize

function initResponsive(){
  document.write( '<meta name="viewport" content="width=device-width,user-scalable=yes,maximum-scale=1.5" />' )
  var _UA = navigator.userAgent;
  if( _UA.indexOf('iPhone') >0 || _UA.indexOf('iPod') >0 || _UA.indexOf('Android') >0 )
    document.write('<link href="_/style_sp.css" type="text/css" rel="stylesheet"/>')
  else if( _UA.indexOf('iPad') >0 )
    document.write('<link href="_/style_tb.css" type="text/css" rel="stylesheet"/>')
  else
    document.write('<link href="_/style_pc.css" type="text/css" rel="stylesheet"/>')
}

//function showUa(){
//  var _UA = navigator.userAgent;
//  document.write('<div style="font-size:67%;color:#000000" align="right">');
//  if( _UA.indexOf('iPhone') >0 || _UA.indexOf('iPod') >0 || _UA.indexOf('Android') >0 )
//    document.write('Smartphone')
//  else if( _UA.indexOf('iPad') >0 )
//    document.write('iPad')
//  else
//    document.write('PC')
//  document.write('</div>');
//}

//function body(){
//  document.write('<body class="bodySettings">')
//}

