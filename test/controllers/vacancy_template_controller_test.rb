require 'test_helper'

class VacancyTemplateControllerTest < ActionController::TestCase
  test "should get ats_template" do
    get :ats_template
    assert_response :success
  end

end
