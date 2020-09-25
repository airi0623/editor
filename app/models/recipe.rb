class Recipe < ApplicationRecord
  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to_active_hash :category

  #belongs_to   :user
  has_many     :materials, dependent: :destroy
  has_one      :cook, dependent: :destroy
  has_one_attached :image

  accepts_nested_attributes_for :materials, allow_destroy: true
  accepts_nested_attributes_for :cook, allow_destroy: true
end
