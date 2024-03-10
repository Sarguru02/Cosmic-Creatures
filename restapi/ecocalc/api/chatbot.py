import google.generativeai as genai
from rest_framework.decorators import api_view
from rest_framework.views import Response

genai.configure(api_key="AIzaSyAtgspQnCqfJBlFYFnRa-5pFRvRq4cquzc")
@api_view(['POST'])
def get_gemini_response(request):
    model = genai.GenerativeModel('gemini-pro')
    user_message = request.data['question']
    prompt = f"A user gives the following message: {user_message}. Give answer respect to above related only to reduce carbon emission or co2 emissions if the input is not related to carbon emission reply as Dont understand"
    response = model.generate_content(prompt)
    return Response(response.text)
