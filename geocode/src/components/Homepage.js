import React from "react";

class Homepage extends React.Component {
	render() {
		return (<div style = {{width:'100%',height:'100vh',position:'relative'}}>
			<iframe style={{height:'100vh', width:'100%', position:'absolute'}} frameBorder="0" scrolling="no" title="testing" src="//www.arcgis.com/apps/Embed/index.html?webmap=debfc7ae46a647bca10d8a0bbd54f204&extent=-9.1096,52.6227,-5.0529,54.0397&home=true&zoom=true&previewImage=false&scale=true&search=true&searchextent=true&details=true&legendlayers=true&active_panel=details&basemap_gallery=true&disable_scroll=true&theme=light">
			</iframe>
		</div>);
	}
}

export default Homepage;
