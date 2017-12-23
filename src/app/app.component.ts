import { Component } from "@angular/core";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"]
})
export class AppComponent {
	title = "app";
	url = "";
	listItems: any;
	constructor() {
		this.listItems = [
			{
				name: "Home",
				link: "#/home"
			},
			{
				name: "Products",
				link: "#/products"
			},
			{
				name: "Cart",
				link: "#/cart"
			},
			{
				name: "About",
				link: "#/about"
			}
		];
	}
	add(title, url) {
		if (title !== "" && url !== "") {
			url = "http://" + url;
			this.listItems.push({
				name: title,
				link: url,
				isNew: true
			});
			this.title = "";
			this.url = "";
		}
	}
}
