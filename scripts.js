document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("wineForm");
    const resultDiv = document.getElementById("result");
    const predictionResult = document.getElementById("predictionResult");

    // Handle form submission on the wine_input.html page
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            
            // Get input values
            const fixedAcidity = parseFloat(document.getElementById("fixedAcidity").value);
            const volatileAcidity = parseFloat(document.getElementById("volatileAcidity").value);
            // Get other inputs similarly...

            // Store the data temporarily in sessionStorage (or localStorage)
            const wineData = {
                fixedAcidity,
                volatileAcidity,
                // Add other features here...
            };

            sessionStorage.setItem("wineData", JSON.stringify(wineData));

            // Redirect to prediction result page
            window.location.href = "prediction_result.html";
        });
    }

    // Handle the result display on the prediction_result.html page
    if (predictionResult) {
        const wineData = JSON.parse(sessionStorage.getItem("wineData"));

        if (wineData) {
            // For demo purposes, let's predict wine quality based on some logic
            const predictedQuality = predictWineQuality(wineData);
            predictionResult.innerText = `Predicted Wine Quality: ${predictedQuality}`;
        } else {
            predictionResult.innerText = "No data available!";
        }
    }

    // Example mock prediction logic
    function predictWineQuality(wineData) {
        // Simplified logic (replace with your actual model or logic)
        if (wineData.fixedAcidity > 7) {
            return "Low Quality";
        } else if (wineData.volatileAcidity > 0.5) {
            return "Medium Quality";
        } else {
            return "High Quality";
        }
    }
});
