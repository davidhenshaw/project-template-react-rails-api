class UserSerializer < ActiveModel::Serializer
  attributes [:id, :funds, :username]
end
