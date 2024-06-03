const Address = () => {
	return (
		<div>
			This is a saved environmental variable: <span className="env-var">{import.meta.env.VITE_API_URL}</span>
		</div>
	);
};

export default Address;
