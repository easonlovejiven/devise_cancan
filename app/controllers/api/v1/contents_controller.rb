class Api::V1::ContentsController < Api::V1::BaseController
	# api url(http://localhost:3000/api/v1/contents/get_file/)
	def get_file
		# 做具体操作
		# result = {}
		render :json => result
	end
end
