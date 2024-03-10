import google.generativeai as genai
from rest_framework.decorators import api_view
from rest_framework.views import Response

genai.configure(api_key="AIzaSyAtgspQnCqfJBlFYFnRa-5pFRvRq4cquzc")
@api_view(['POST'])
def get_gemini_response(request):
    model = genai.GenerativeModel('gemini-pro')
    response = model.generate_content(request.data['question'])
    return Response(response.text)
