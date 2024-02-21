export  async function userDelete() {
// what i do care about that i know when hit delete button 
// we grab this info name and email send request to server 
// server uses that to del document from db 
    const name= this.parentNode.childNodes[1].innerText
    const email= this.parentNode.childNodes[2].innerText
    try {
        const response = await fetch('/userDelete', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email })
        });

        if (!response.ok) {
            throw new Error('Failed to delete user');
        }

        const data = await response.json();
        console.log(data);
        location.reload(); // Refresh the page
    } catch (error) {
        console.error(error);
        throw error;
    }
}
