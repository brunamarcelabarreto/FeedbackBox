import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";


describe('Submite feddback', () => {
  it('shouldde able to submit a feedback', async () => {
    const submitFeedback = new SubmitFeedbackUseCase(
      { create: async () => {} },
      {sendMail: async () => {}}
    )

    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'example comment',
      screenshot: 'test.jpg',
    })).resolves.not.toThrow();
  });
});