class AddPriceToProperties < ActiveRecord::Migration[8.0]
  def change
    add_monetize :properties,
                 :price, 
                 currency: { present: false, null: true, default: nil }, 
                 amount: { null: true, default: nil }
  end
end
