document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("skincare-quiz");
    const resultDiv = document.getElementById("result");
  
    const products = [
      { name: "Cleanser", skinTypes: ["oily", "combo"] },
      { name: "Moisturizer", skinTypes: ["oily", "combo"] },
      { name: "Serum", skinTypes: ["dry", "normal"] },
      { name: "Moisturizer + Serum Duo", skinTypes: ["dry", "normal"] },
    ];
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const answers = getFormAnswers();
  
      if (!allAnswered(answers)) {
        resultDiv.innerHTML = "<p>Please answer all questions before submitting.</p>";
        resultDiv.style.display = "block";
        return;
      }
  
      const recommendation = getProductRecommendation(answers.skinType);
  
      resultDiv.innerHTML = `
        <h2>Your Personalized Pick:</h2>
        <p>Based on your skin type, we recommend: <strong>${recommendation.join(" or ")}</strong></p>
      `;
      resultDiv.style.display = "block";
    });
  
    function getFormAnswers() {
      return {
        usedBefore: getRadioValue("usedBefore"),
        acne: getRadioValue("acne"),
        skinType: getRadioValue("skinType"),
        usage: getRadioValue("usage"),
        budget: getRadioValue("budget"),
      };
    }
  
    function getRadioValue(name) {
      const input = document.querySelector(`input[name="${name}"]:checked`);
      return input ? input.value : undefined;
    }
  
    function allAnswered(answers) {
      return Object.values(answers).every((val) => val !== undefined);
    }
  
    function getProductRecommendation(skinType) {
      const matches = products.filter((product) =>
        product.skinTypes.includes(skinType)
      );
      return matches.map((p) => p.name);
    }
  });
  