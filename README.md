# pandoc bootstrap adaptive template

Includes a sticky adaptive menu and some other nice things:

Install: 

    git clone https://github.com/diversen/pandoc-uikit

    cd pandoc-uikit

Example (fetch latest pandoc README and transform to HTML)

    pandoc https://github.com/jgm/pandoc/blob/master/MANUAL.txt -o index.html -f markdown --template standalone.html --css template.css --toc --toc-depth=2

Start a server in current directory, e.g.: 

    php -S localhost:8080

Point a browser to [http://localhost:8080](http://localhost:8080)

Or checout the gh-page for this repository, which is the pandoc documentation with this template: 

[http://diversen.github.io/pandoc-uikit](http://diversen.github.io/pandoc-uikit/)
