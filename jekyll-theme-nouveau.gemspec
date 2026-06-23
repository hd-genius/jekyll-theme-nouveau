# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "jekyll-theme-nouveau"
  spec.version       = "0.2.0"
  spec.authors       = ["Roy Stewart"]
  spec.email         = ["roythomasstewart@gmail.com"]

  spec.summary       = "Clean and simple Jekyll theme."
  spec.homepage      = "https://nouveau.hdgenius.me"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.0"
  spec.add_runtime_dependency "kramdown-parser-gfm", "~> 1.0"
  spec.add_runtime_dependency "jekyll-sass-converter", "~>3.1"
  spec.add_runtime_dependency "jekyll-paginate", "~> 1.1"
  spec.add_runtime_dependency "jekyll-sitemap", "~> 1.4"
end
