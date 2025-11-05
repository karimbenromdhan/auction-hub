import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Text } from "../../atoms";
import { FormField } from "../../molecules";
import { usePlaceBid } from "../../../hooks";
import { placeBidSchema } from "../../../utils";
import { BidFormProps, BidFormData } from "@/interfaces";

function BidForm(props: BidFormProps) {
  const { auctionId, currentPrice, onSuccess } = props;
  const placeBidMutation = usePlaceBid();

  const minBidAmount = Math.ceil(currentPrice) + 1;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BidFormData>({
    resolver: yupResolver(placeBidSchema),
    defaultValues: {
      amount: minBidAmount,
    },
  });

  // Update form when minimum bid changes
  useEffect(() => {
    reset({ amount: minBidAmount });
  }, [minBidAmount, reset]);

  const onSubmit = async (data: BidFormData) => {
    try {
      await placeBidMutation.mutateAsync({
        auctionId,
        amount: data.amount,
      });
      reset({ amount: minBidAmount });
      onSuccess?.();
    } catch (error) {
      // Error is handled by the mutation and displayed via toast
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="bg-blue-50 p-4 rounded-lg">
        <Text variant="small" color="secondary" className="mb-1">
          Minimum bid amount
        </Text>
        <Text variant="h4" weight="bold" color="primary">
          ${minBidAmount}
        </Text>
      </div>

      <FormField
        label="Your Bid Amount"
        type="number"
        step="0.01"
        min={minBidAmount}
        placeholder={`Enter amount (min $${minBidAmount})`}
        error={errors.amount?.message}
        required
        {...register("amount", { valueAsNumber: true })}
      />

      <Button type="submit" fullWidth isLoading={placeBidMutation.isPending}>
        Place Bid
      </Button>

      <Text variant="caption" color="secondary" className="text-center block">
        By placing a bid, you agree to purchase this item if you win
      </Text>
    </form>
  );
}

export default BidForm;
