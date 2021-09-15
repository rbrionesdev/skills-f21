class Api::GradesController < ApplicationController

  def index
    grades = Grade.all_and_then_some
    render json: grades
  end

  def create
    # we have to have the user_id and skill_id
    @grade = Grade.new(grade_params)
    if(@grade.save)
      render json: @grade
    else
      render json: {error: @grade.errors}, status: 422
    end
  end

  private
  def grade_params
    params.require(:grade).permit(:score, :user_id, :skill_id)
  end
end
