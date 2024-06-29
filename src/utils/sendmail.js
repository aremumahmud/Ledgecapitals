async function SendEmail(data) {
    // alert(JSON.stringify(data))
    try {
        const response = await fetch("https://ledgepointbackend.onrender.com/api/admin/" + "send_email_me", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("site")

            },
            body: JSON.stringify(data)
        });

        const res = await response.json();

        return res

    } catch (err) {
        return Promise.reject({ error: true, message: 'An unexpected error occured, Please click the button below to reload this page' })
    }
}

export default SendEmail