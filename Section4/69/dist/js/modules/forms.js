function forms() {
    const forms = document.querySelectorAll("form");
    const message = {
        loading: "img/form/spinner.svg",
        succes: "thank",
        failure: "error",
    };
    forms.forEach((item) => {
        bindPostData(item);
    });
    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: data,
        });
        return await res.json();
    };
    function bindPostData(form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const statusMessage = document.createElement("img");
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
        display: block;
        margin: 0 auto;
        `;
            // form.append(statusMessage);
            form.insertAdjacentElement("afterend", statusMessage);

            // const request = new XMLHttpRequest();
            // request.open("POST", "server.php");
            //--------------Text(no JSON)

            // const formData = new FormData(form);

            // request.send(formData);
            //-------------JSON
            // request.setRequestHeader("Content-type", "application/json");
            const formData = new FormData(form);
            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            // const object = {};
            // formData.forEach(function (value, key) {
            //     object[key] = value;
            // });
            // const json = JSON.stringify(object);
            // fetch("server.php", {
            //     method: "POST",
            //     headers: {
            //         "Content-type": "application/json",
            //     },
            //     body: JSON.stringify(object),
            // });
            postData("http://localhost:3000/requests", json)
                .then((data) => {
                    console.log(data);
                    showThanksModal(message.succes);

                    statusMessage.remove();
                })
                .catch(() => {
                    showThanksModal(message.failure);
                })
                .finally(() => {
                    form.reset();
                });
            // request.send(json);
            //-----------------
            // request.addEventListener("load", () => {
            //     if (request.status === 200) {
            //         console.log(request.response);
            //         showThanksModal(message.succes);
            //         form.reset();

            //         statusMessage.remove();
            //     } else {
            //         showThanksModal(message.failure);
            //     }
            // });
        });
    }
}
module.exports = forms;
