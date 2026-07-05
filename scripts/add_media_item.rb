#!/usr/bin/env ruby

require 'optparse'
require 'yaml'

repo_root = File.expand_path('..', __dir__)
data_file = File.join(repo_root, '_data', 'media_shelf.yml')

options = {
  section: nil,
  title: nil,
  url: nil
}

parser = OptionParser.new do |opts|
  opts.banner = 'Usage: ruby scripts/add_media_item.rb --section <id> --title <title> [--url <url>]'

  opts.on('--section SECTION', 'Section id (e.g. articles, videos, papers)') do |value|
    options[:section] = value
  end

  opts.on('--title TITLE', 'Item title') do |value|
    options[:title] = value
  end

  opts.on('--url URL', 'Item URL (optional for non-link sections)') do |value|
    options[:url] = value
  end
end

parser.parse!

if options[:section].to_s.strip.empty? || options[:title].to_s.strip.empty?
  warn parser.banner
  exit 1
end

unless File.exist?(data_file)
  warn "Missing data file: #{data_file}"
  exit 1
end

data = YAML.safe_load(File.read(data_file), permitted_classes: [], aliases: false)
sections = data['sections'] || []
section = sections.find { |s| s['id'] == options[:section] }

if section.nil?
  ids = sections.map { |s| s['id'] }.join(', ')
  warn "Unknown section '#{options[:section]}'. Available: #{ids}"
  exit 1
end

item = { 'title' => options[:title].strip }
item['url'] = options[:url].strip unless options[:url].to_s.strip.empty?

section['items'] ||= []
section['items'] << item

File.write(data_file, YAML.dump(data))
puts "Added '#{item['title']}' to section '#{section['id']}'"