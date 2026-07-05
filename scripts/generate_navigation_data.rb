#!/usr/bin/env ruby

require 'date'
require 'fileutils'
require 'open3'
require 'yaml'

repo_root = File.expand_path('..', __dir__)
navigation_output_path = File.join(repo_root, '_data', 'navigation.yml')
page_updates_output_path = File.join(repo_root, '_data', 'page_updates.yml')

nav_items = [
  { 'label' => 'Home', 'url' => '/', 'active_key' => 'home_active', 'path' => 'index.html' },
  { 'label' => 'Blog', 'url' => '/blog/', 'active_key' => 'blog_active', 'path' => 'blog/index.html' },
  { 'label' => 'Projects', 'url' => '/research/', 'active_key' => 'research_active', 'path' => 'research/index.html' },
  { 'label' => 'Media Shelf', 'url' => '/media/', 'active_key' => 'media_active', 'path' => 'media/index.html' },
  { 'label' => 'CV', 'url' => '/assets/cv.pdf', 'active_key' => 'cv_active', 'path' => 'assets/cv.pdf', 'target' => '_blank' }
]

def last_commit_date(repo_root, relative_path)
  stdout, status = Open3.capture2('git', '-C', repo_root, 'log', '-1', '--format=%cs', '--', relative_path)
  return nil unless status.success?

  text = stdout.strip
  return nil if text.empty?

  Date.strptime(text, '%Y-%m-%d')
end

tracked_page_paths = `git -C "#{repo_root}" ls-files '*.html' '*.md'`.split("\n").select do |path|
  path == 'index.html' ||
    path.start_with?('blog/') ||
    path.start_with?('cv/') ||
    path.start_with?('research/') ||
    path.start_with?('media/') ||
    path.start_with?('_posts/')
end

navigation = nav_items
page_updates = tracked_page_paths.each_with_object({}) do |path, updates|
  date = last_commit_date(repo_root, path)
  updates[path] = date.strftime('%Y-%m-%d') if date
end

FileUtils.mkdir_p(File.dirname(navigation_output_path))
File.write(navigation_output_path, navigation.to_yaml)
File.write(page_updates_output_path, page_updates.to_yaml)

puts "Wrote #{navigation_output_path} and #{page_updates_output_path}"