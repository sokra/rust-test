const buttons = document.querySelectorAll("button");
const content = document.querySelector("#content");

for(const button of Array.from(buttons)) {
    button.addEventListener("click", event => {
        import(`./demos/${button.dataset.demo}`).then(({ default: element }) => {
            while(content.childNodes.length)
                content.removeChild(content.childNodes[0]);
            content.appendChild(element);
        }).catch(err => {
            while(content.childNodes.length)
                content.removeChild(content.childNodes[0]);
            const text = document.createTextNode(err.message);
            console.log(err);
            content.appendChild(text);
        });
    });
}