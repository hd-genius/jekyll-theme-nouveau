# Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/[USERNAME]/hello. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## Development

### Environment setup
To set up your environment to develop this theme, install Ruby and Bundler. This is verified to work with Ruby 3.3.8 and Bundler 4.0.6.

To install the project specific dependencies, run `bundle install`.

Your theme is setup just like a normal Jekyll site! To test your theme, run `bundle exec jekyll serve` and open your browser at `http://localhost:4000`. This starts a Jekyll server using your theme. Add pages, documents, data, etc. like normal to test your theme's contents. As you make modifications to your theme and to your content, your site will regenerate and you should see the changes in the browser after a refresh, just like normal.

When your theme is released, only the files in `_layouts`, `_includes`, `_sass` and `assets` tracked with Git will be bundled.
To add a custom directory to your theme-gem, please edit the regexp in `jekyll-theme-nouveau.gemspec` accordingly.

### Building the theme gem

To build the gem run `gem build`.

### Testing locally

To serve the demo site run `bundle exec jekyll serve`. You can also install the theme to your jekyll website to test locally by adding `gem "path/to/jekyll-theme-nouveau"` to your gem file and then running `bundle install` to install the theme to your local Jekyll site. You may have to build the theme's gem and then run the `bundle install` command after every change to the theme's source code.