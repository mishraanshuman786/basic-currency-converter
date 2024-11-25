# Simple Currency Converter

## Project Overview
This is a **Simple Currency Converter** application built using **HTML**, **CSS**, and **JavaScript**. The application allows users to convert values between different currencies using real-time exchange rates. The UI is mobile-responsive and designed for a smooth user experience.

## Features
- Converts currency values between multiple currencies.
- Fetches real-time exchange rates from a JSON file.
- User-friendly and intuitive design.
- Fully responsive for mobile and desktop devices.

## How It Works
1. Select the currency you want to convert from (e.g., USD).
2. Select the target currency you want to convert to (e.g., EUR).
3. Enter the value to convert.
4. Click the **Convert** button to get the converted value.

## Tech Stack
- **HTML**: For structuring the application.
- **CSS**: For styling the application and making it responsive.
- **JavaScript**: For handling user input, fetching exchange rates, and performing currency conversion.

## Installation and Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/simple-currency-converter.git
   ```
2. Navigate to the project directory:
   ```bash
   cd simple-currency-converter
   ```
3. Open the `index.html` file in your browser to run the application.
4. Ensure that the `CurrencyRates.json` file is served via a local server. For example:
   ```bash
   npx http-server --cors -p 8000
   ```

## Project Structure
```
project-folder/
├── index.html          # Main HTML file
├── style.css           # CSS for styling
├── script.js           # JavaScript for functionality
├── CurrencyRates.json  # JSON file with exchange rates
```

## Demo
Here is how the application looks:
![Currency Converter Screenshot](https://via.placeholder.com/800x400.png?text=Currency+Converter+UI+Screenshot)

## Future Enhancements
- Integrate a live API for real-time exchange rates.
- Add more currencies.
- Include a history or log of previous conversions.

## Contributing
Contributions are welcome! Feel free to fork this repository and submit a pull request.

## License
This project is licensed under the [MIT License](LICENSE).

---
**Thank you for using this Currency Converter!**
