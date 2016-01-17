require 'test_helper'

class StaticPagesControllerTest < ActionController::TestCase
  test "should get cv1" do
    get :cv1
    assert_response :success
  end

  test "should get cv2" do
    get :cv2
    assert_response :success
  end

  test "should get cv3" do
    get :cv3
    assert_response :success
  end

  test "should get personal_statement" do
    get :personal_statement
    assert_response :success
  end

end
