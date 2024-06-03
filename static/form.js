function Form() {
  const [nitrogen, setNitrogen] = React.useState();
  const [phosphorus, setPhosphorus] = React.useState();
  const [potassium, setPotassium] = React.useState();
  const [temperature, setTemperature] = React.useState();
  const [moisture, setMoisture] = React.useState();
  const [ph, setPh] = React.useState();
  const [rainfall, setRainfall] = React.useState();
  const [result, setResult] = React.useState();

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nitrogen,
          phosphorus,
          potassium,
          temperature,
          moisture,
          ph,
          rainfall,
        }),
      });
      const data = await res.json();
      setResult(data.result);
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("Error processing the request");
    }
  };

  return (
    <>
      <form className="space-y-6">
        <div>
          <label className="block text-gray-700 text-sm font-bold my-2">
            Nitrogen
          </label>
          <input
            type="number"
            step="0.01"
            value={nitrogen}
            onChange={(e) => setNitrogen(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-gray-800"
            required
          />
          <label className="block text-gray-700 text-sm font-bold my-2">
            Phosphorus
          </label>
          <input
            type="number"
            step="0.01"
            value={phosphorus}
            onChange={(e) => setPhosphorus(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-gray-800"
            required
          />
          <label className="block text-gray-700 text-sm font-bold my-2">
            Potassium
          </label>
          <input
            type="number"
            step="0.01"
            value={potassium}
            onChange={(e) => setPotassium(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-gray-800"
            required
          />
          <label className="block text-gray-700 text-sm font-bold my-2">
            Temperature
          </label>
          <input
            type="number"
            step="0.01"
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-gray-800"
            required
          />
          <label className="block text-gray-700 text-sm font-bold my-2">
            Moisture
          </label>
          <input
            type="number"
            step="0.01"
            value={moisture}
            onChange={(e) => setMoisture(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-gray-800"
            required
          />
          <label className="block text-gray-700 text-sm font-bold my-2">
            pH
          </label>
          <input
            type="number"
            step="0.01"
            value={ph}
            onChange={(e) => setPh(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-gray-800"
            required
          />
          <label className="block text-gray-700 text-sm font-bold my-2">
            Rainfall
          </label>
          <input
            type="number"
            step="0.01"
            value={rainfall}
            onChange={(e) => setRainfall(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-gray-800"
            required
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            onClick={handleClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Get Recommendation
          </button>
        </div>
      </form>
      {result && (
        <div className="mt-6">
          <div className="bg-green-800 rounded-lg p-4">
            <h2 className="text-xl font-semibold text-white mb-2">
              Recommend Crop for cultivation is:{" "}
              <span className="capitalize">{result}</span>
            </h2>
          </div>
        </div>
      )}
    </>
  );
}

ReactDOM.render(<Form />, document.querySelector("#form"));