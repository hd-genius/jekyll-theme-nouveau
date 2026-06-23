# Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/[USERNAME]/hello. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## Development

### Environment setup

To set up your environment to develop this theme, you need to install Ruby, Bundler, and the Bundler managed dependencies. This is verified to work with Ruby 3.3.8 and Bundler 4.0.6 but other versions may also be compatible.


Follow [these instructions](https://www.ruby-lang.org/en/documentation/installation/) to install Ruby.

Project dependencies, including jekyll, are managed through bundler. In most environments you can install bundler through ruby gems. To install bundler run `gem install bundler`.

It is recommended, but not necessary, to configure bundler to install dependencies to a local project directory. To do this, run `bundle config set --local path 'vendor/bundle'`. Once bundler is setup, install the project specific dependencies by running `bundle install`.

### Building the theme gem

To build the gem run `gem build`.

### Testing locally

To serve the demo site run `bundle exec jekyll serve`. You can also install the theme to your jekyll website to test locally by adding `gem "path/to/jekyll-theme-nouveau"` to your gem file and then running `bundle install` to install the theme to your local Jekyll site. You may have to build the theme's gem and then run the `bundle install` command after every change to the theme's source code.