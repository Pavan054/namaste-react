const Contact = () => {
    return (
        <div>
            <h1 className="font-bold text-3xl m-4 p-4">Cotact Us</h1>
            <form>
                <input className="border border-black m-2 p-2" type="text" placeholder="name" />
                <input className="border border-black m-2 p-2" type="text" placeholder="message" />
                <button className="border border-black m-2 p-2 bg-green-200 rounded-lg">Submit</button>
            </form>
        </div>
    );
}

export default Contact;
