# encoding: utf-8

require "json"

url_pow     = "northshoreholdingsltd"
url_live    = "northshoreholdingsltd.com"

github_repo = "scottweisman/northshoreholdingsltd"

desc "Delete old website files to start fresh."
task :clean do
  puts "Starting fresh!"
  system "rm -rf _site"
end

desc "Design, write, and edit live."
task :default => [:clean] do
  pids = [
    spawn("jekyll -w build"),
    spawn("scss --watch _stylesheets:stylesheets")
  ]

  trap "INT" do
    Process.kill "INT", *pids
    exit 1
  end

  loop do
    sleep 1
  end
end

desc "Creates a Pow link. http://pow.cx"
task :pow do
  system "ln -s '#{__dir__}' ~/.pow/#{url_pow}"
  puts "Set up a Pow site at http://#{url_pow}.dev."
end

desc "Generate a copy of the most current site."
task :compile do
  system "jekyll build"
  # system "sass --style compressed _assets/stylesheets/style.scss:public/assets/stylesheets/style.css"
end

desc "Upload a copy of your site to the server, and update GitHub."
# Usage: rake ship "Commit message."
task :ship do
  message = ARGV.last
  task message.to_sym do ; end
  system "git add -A"
  system "git commit -am '#{message}'"
  system "git pull"
  system "git push"
  puts "Shipped to GitHub."
end

desc "Builds a fresh copy of your site, then opens it."
task :view => [:build] do
  system "open http://#{url_pow}.dev"
end

namespace :view do
  desc "View your site live."
  task :live do
    system "open http://#{url_live}"
  end

  desc "Generate an xip.io friendly URL."
  task :xip do
    ip = `ifconfig | grep 'inet ' | grep -v '127.0.0.1' | awk '{print $2}' | awk '{ printf "%s", $0 }'`
    url = "http://#{url_pow}.#{ip}.xip.io/"
    puts "Opening #{url}…"
    system "open #{url}"
  end

  desc "View your project on GitHub."
  task :github do
    system "open http://github.com/#{github_repo}"
  end
end
