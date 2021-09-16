# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'
Grade.destroy_all
Skill.destroy_all
User.destroy_all

a = Skill.create(name: 'ruby', description:'Syntaz Sugar')
b = Skill.create(name: 'rails', description:'Stay on the rails...Convention')
c = Skill.create(name: 'react', description:'make writing UI noooice!!!')

# Skills could also be a homework with a grade
d = Skill.create(name: 'Homework1', description:'CRUD ACTIONS!!')
e = Skill.create(name: 'Homework2', description:'Cassino')

skills =[a,b,c,d,e]


200.times do |i|
 user = User.create(name: Faker::Name.name)
 5.times do |i|
  Grade.create(score: rand(100), skill_id: skills[i].id, user_id: user.id)
 end
end

puts "SKILLZZ SIZE: #{Skill.all.length}"
puts "USER SIZE: #{User.all.length}"
puts "GRADE SIZE: #{Grade.all.length}"

# grab users skill
puts "FIRST USER SKILLs: #{User.first.skills}"

# grab users firts skill grades
puts "FIRST USER Grades: #{User.first.grades}"