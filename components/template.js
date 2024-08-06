 function getTemplate(chartTitle,bottomTitle,base64Image){
        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${chartTitle}</title>
            <style>
                body {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                }
                .chart-container {
                    text-align: center;
                }
            </style>
        </head>
        <body>
            <div class="chart-container">
                <h2>${chartTitle}</h2>
                <img src="data:image/png;base64,${base64Image}" alt="${chartTitle}">
            </div>
        </body>
        </html>
    `;
}