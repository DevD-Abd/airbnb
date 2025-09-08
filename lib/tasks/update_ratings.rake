namespace :properties do
  desc "Update average final ratings for all properties"
  task update_ratings: :environment do
    puts "Updating average final ratings for all properties..."
    
    Property.includes(:reviews).find_each do |property|
      puts "Property: #{property.name}"
      puts "  Reviews count: #{property.reviews.count}"
      
      if property.reviews.any?
        property.update_average_rating
        puts "  Average rating updated: #{property.reload.average_final_rating}"
      else
        puts "  No reviews found"
      end
      puts "---"
    end
    
    puts "Done!"
  end
end
